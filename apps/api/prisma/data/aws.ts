// AWS learning path — order here is the order shown in the app.
import { topic as awsFundamentals } from './topics/aws-fundamentals.js';
import { topic as awsIam } from './topics/aws-iam.js';
import { topic as awsCompute } from './topics/aws-compute.js';
import { topic as awsNetworking } from './topics/aws-networking.js';
import { topic as awsStorage } from './topics/aws-storage.js';
import { topic as awsDatabases } from './topics/aws-databases.js';
import { topic as awsOperations } from './topics/aws-operations.js';
import { topic as awsArchitecture } from './topics/aws-architecture.js';
import type { SeedTopic } from './types.js';

export const awsTopics: SeedTopic[] = [
  awsFundamentals,
  awsIam,
  awsCompute,
  awsNetworking,
  awsStorage,
  awsDatabases,
  awsOperations,
  awsArchitecture,
];
