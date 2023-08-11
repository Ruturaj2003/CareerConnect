import { render, screen } from '@testing-library/vue';
import axios from 'axios';
import type { Mock } from 'vitest';
import type { ModuleNamespace } from 'node_modules/vite/types/hot';
import SpotLight from '@/components/jobSearch/SpotLight.vue';

vi.mock('axios');
const axiosGetMock = axios.get as Mock;

describe('SpotLight', () => {
  const mockSpotlightsResponse = (spotlight = {}) => {
    axiosGetMock.mockResolvedValue({
      data: [
        {
          id: 1,
          img: 'Some image',
          title: 'Some title',
          description: 'Some description',
          ...spotlight
        }
      ]
    });
  };

  it('provides image to parent component', async () => {
    const spotlight = { img: 'Other image' };
    mockSpotlightsResponse(spotlight);

    render(SpotLight, {
      slots: {
        default: `<template #default="slotProps">
          <h1>{{ slotProps.spotlight.img }}</h1>
        </template>`
      }
    });

    const text = await screen.findByText('Other image');
    expect(text).toBeInTheDocument();
  });

  it('provides title to parent component', async () => {
    const spotlight = { title: 'Other title' };
    mockSpotlightsResponse(spotlight);

    render(SpotLight, {
      slots: {
        default: `<template #default="slotProps">
          <h1>{{ slotProps.spotlight.title }}</h1>
        </template>`
      }
    });

    const text = await screen.findByText('Other title');
    expect(text).toBeInTheDocument();
  });

  it('provides description to parent component', async () => {
    const spotlight = { description: 'Another description' };
    mockSpotlightsResponse(spotlight);

    render(SpotLight, {
      slots: {
        default: `<template #default="slotProps">
          <h1>{{ slotProps.spotlight.description }}</h1>
        </template>`
      }
    });

    const text = await screen.findByText('Another description');
    expect(text).toBeInTheDocument();
  });
});
