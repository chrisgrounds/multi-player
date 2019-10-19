#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { AwsStackStack } from '../lib/aws-stack-stack';

const app = new cdk.App();
new AwsStackStack(app, 'AwsStackStack');