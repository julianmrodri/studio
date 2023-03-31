import { Module } from '@nestjs/common';

import { AbstractApp } from '~app/app.dynamic-module';

import { ReserveProtocolContractFactory } from './contracts';
import { EthereumReserveProtocolStakedRsrTokenFetcher } from './ethereum/reserve-protocol.staked-rsr.token-fetcher';

@Module({
  providers: [EthereumReserveProtocolStakedRsrTokenFetcher, ReserveProtocolContractFactory],
})
export class ReserveProtocolAppModule extends AbstractApp() {}
