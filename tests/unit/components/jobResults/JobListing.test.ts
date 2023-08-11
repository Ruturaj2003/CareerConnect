import { render, screen } from '@testing-library/vue';
import { RouterLinkStub } from '@vue/test-utils';
import { createJob } from '../../../utils/createJobs';
import type { Job } from '@/api/types';
import JobListing from '@/components/jobResults/JobListing.vue';

describe('JobListing', () => {
  const renderJobListing = (job: Job) => {
    render(JobListing, {
      global: {
        stubs: {
          'router-link': RouterLinkStub
        }
      },
      props: {
        job: {
          ...job
        }
      }
    });
  };

  it('renders job title', () => {
    const jobProps = createJob({ title: 'The Vue Programmer' });
    renderJobListing(jobProps);
    expect(screen.getByText('The Vue Programmer')).toBeInTheDocument();
  });

  it('renders job organization', () => {
    const jobProps = createJob({ organization: 'Samsung' });
    renderJobListing(jobProps);
    expect(screen.getByText('Samsung')).toBeInTheDocument();
  });

  it('renders job locations', () => {
    const jobProps = createJob({
      locations: ['Orlando', 'Jacksonville']
    });
    renderJobListing(jobProps);
    expect(screen.getByText('Orlando')).toBeInTheDocument();
    expect(screen.getByText('Jacksonville')).toBeInTheDocument();
  });

  it('renders job qualifications', () => {
    const jobProps = createJob({
      minimumQualifications: ['Code', 'Develop']
    });
    renderJobListing(jobProps);
    expect(screen.getByText('Code')).toBeInTheDocument();
    expect(screen.getByText('Develop')).toBeInTheDocument();
  });
});
