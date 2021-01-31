#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SendLogsToS3LambdaExtStack } from '../lib/send-logs-to-s3-lambda-ext-stack';

const app = new cdk.App();
new SendLogsToS3LambdaExtStack(app, 'SendLogsToS3LambdaExtStack');
