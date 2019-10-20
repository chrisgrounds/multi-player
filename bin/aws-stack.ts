#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { AwsMultiPlayerStack } from '../lib/aws-stack-stack';

const app = new cdk.App();
new AwsMultiPlayerStack(app, 'AwsMultiPlayerStack');