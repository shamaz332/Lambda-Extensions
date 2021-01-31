import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as SendLogsToS3LambdaExt from '../lib/send-logs-to-s3-lambda-ext-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new SendLogsToS3LambdaExt.SendLogsToS3LambdaExtStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
