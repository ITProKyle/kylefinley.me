import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import AwsIcon from './icons/aws-icons';

import PowerShell from './icons/code/powershell';
import Python from './icons/code/python';
import NodeJS from './icons/code/node';
import ReactJS from './icons/code/react';

import Linux from './icons/os/linux';
import RedHat from './icons/os/redhat';
import Windows from './icons/os/windows';

import Exchange from './icons/tech/exchange';
import Office365 from './icons/tech/office365';
import VMware from './icons/tech/vmware';
import WiFi from './icons/tech/wifi';

export default class ProfileSkills extends Component {
  state={
    zDepth: 0,
    chipData: {
      code: [
        { label: 'boto3', icon: <AwsIcon.Boto3 /> },
        { label: 'JavaScript AWS SDK', icon: <AwsIcon.AwsJavaScriptSdk /> },
        { label: 'PowerShell', icon: <PowerShell /> },
        { label: 'Python', icon: <Python /> },
        { label: 'Node', icon: <NodeJS /> },
        { label: 'React', icon: <ReactJS /> }
      ],
      tech: [
        { label: 'AWS Route 53', icon: <AwsIcon.Route53 /> },
        { label: 'AWS Auto Scaling', icon: <AwsIcon.ASG /> },
        { label: 'AWS CloudFormation', icon: <AwsIcon.CloudFormation /> },
        { label: 'AWS CloudFront', icon: <AwsIcon.CloudFront /> },
        { label: 'AWS CloudTrail', icon: <AwsIcon.CloudTrail /> },
        { label: 'AWS CodeBuild', icon: <AwsIcon.CodeBuild /> },
        { label: 'AWS CodePipeline', icon: <AwsIcon.CodePipeline /> },
        { label: 'AWS Config', icon: <AwsIcon.Config /> },
        { label: 'AWS CloudWatch', icon: <AwsIcon.CloudWatch /> },
        { label: 'AWS DynamoDB', icon: <AwsIcon.DynamoDB /> },
        { label: 'AWS Elastic Beanstalk', icon: <AwsIcon.EB /> },
        { label: 'AWS EC2', icon: <AwsIcon.EC2 /> },
        { label: 'AWS Application/Elastic Load Balancer', icon: <AwsIcon.ELB /> },
        { label: 'AWS IAM', icon: <AwsIcon.IAM /> },
        { label: 'AWS Lambda', icon: <AwsIcon.Lambda /> },
        { label: 'AWS Relational Database Service', icon: <AwsIcon.RDS /> },
        { label: 'AWS S3', icon: <AwsIcon.S3 /> },
        { label: 'AWS Server Migration Service', icon: <AwsIcon.SMS /> },
        { label: 'AWS Simple Notification Service', icon: <AwsIcon.SNS /> },
        { label: 'AWS Simple Queue Service', icon: <AwsIcon.SQS /> },
        { label: 'AWS Simple Server Manager', icon: <AwsIcon.SSM /> },
        { label: 'AWS VPC', icon: <AwsIcon.VPC /> },
        { label: 'Cisco Meraki', icon: <WiFi /> },
        { label: 'Microsoft Exchange 2013', icon: <Exchange /> },
        { label: 'Microsoft Exchange Online', icon: <Exchange /> },
        { label: 'Microsoft Office365', icon: <Office365 /> },
        { label: 'Ubiquiti', icon: <WiFi /> },
        { label: 'VMware', icon: <VMware /> }
      ],
      os: [
        { label: 'Amazon Linux', icon: <Linux /> },
        { label: 'RedHat', icon: <RedHat /> },
        { label: 'Ubuntu', icon: <Linux /> },
        { label: 'Windows 7', icon: <Windows /> },
        { label: 'Windows 8/8.1', icon: <Windows /> },
        { label: 'Windows 10', icon: <Windows /> },
        { label: 'Windows Server 2003/R2', icon: <Windows /> },
        { label: 'Windows Server 2008/R2', icon: <Windows /> },
        { label: 'Windows Server 2012/R2', icon: <Windows /> },
        { label: 'Windows Server 2016', icon: <Windows /> },
      ]
    }
  }

  styles = {
    chip: {
      margin: 4
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap'
    }
  }

  handleMouseEnter = () =>{
  	this.setState({zDepth : 3})
  }

  handleMouseLeave = () =>{
  	this.setState({zDepth : 0})
  }

  renderChip(data) {
    return (
      <Chip key={data.label} style={this.styles.chip}>
        <Avatar icon={data.icon} />
        {data.label}
      </Chip>
    )
  }

  render() {
    return (
      <div>
        <Paper
          zDepth={this.state.zDepth}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <Card>

            <CardHeader className="card-title"
              title="Skills"
              actAsExpander={true}
              showExpandableButton={true}
            />

            <CardText expandable={true}>
            <h4>Languages &#38; SDKs</h4>
            <div style={this.styles.wrapper}>
              {this.state.chipData.code.map(this.renderChip, this)}
            </div>
            <br />
            <br />
            <Divider />
            <h4>Operating Systems</h4>
            <div style={this.styles.wrapper}>
              {this.state.chipData.os.map(this.renderChip, this)}
            </div>
            <br />
            <br />
            <Divider />
            <h4>Technologies</h4>
            <div style={this.styles.wrapper}>
              {this.state.chipData.tech.map(this.renderChip, this)}
            </div>
            </CardText>

          </Card>
        </Paper>
      </div>
    );
  }
}
