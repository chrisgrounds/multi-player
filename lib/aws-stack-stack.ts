import cdk = require('@aws-cdk/core');
import lambda = require('@aws-cdk/aws-lambda');
import lra = require('@aws-cdk/aws-apigateway');

export class AwsMultiPlayerStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaHandler = new lambda.Function(this, 'LambdaHandler', {
      runtime: lambda.Runtime.NODEJS_8_10,
      code: lambda.Code.asset("lambda-bin"),
      handler: 'handler.handler'
    });

    new lra.LambdaRestApi(this, 'AwsLambdaRestApi', { handler: lambdaHandler });
  }
}
