// Azure learning path — order here is the order shown in the app.
import { topic as azureFundamentals } from './topics/azure-fundamentals.js';
import { topic as azureGovernanceCost } from './topics/azure-governance-cost.js';
import { topic as azureIdentity } from './topics/azure-identity.js';
import { topic as azureCompute } from './topics/azure-compute.js';
import { topic as azureNetworking } from './topics/azure-networking.js';
import { topic as azureStorage } from './topics/azure-storage.js';
import { topic as azureOperations } from './topics/azure-operations.js';
import { topic as azureIac } from './topics/azure-iac.js';
import type { SeedTopic } from './types.js';

export const azureTopics: SeedTopic[] = [
  azureFundamentals,
  azureGovernanceCost,
  azureIdentity,
  azureCompute,
  azureNetworking,
  azureStorage,
  azureOperations,
  azureIac,
];
