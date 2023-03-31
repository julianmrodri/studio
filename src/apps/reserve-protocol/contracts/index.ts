import { Injectable, Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { ContractFactory } from '~contract/contracts';
import { Network } from '~types/network.interface';

import { FacadeRead__factory, StakedRsr__factory } from './ethers';

// eslint-disable-next-line
type ContractOpts = { address: string; network: Network };

@Injectable()
export class ReserveProtocolContractFactory extends ContractFactory {
  constructor(@Inject(APP_TOOLKIT) protected readonly appToolkit: IAppToolkit) {
    super((network: Network) => appToolkit.getNetworkProvider(network));
  }

  facadeRead({ address, network }: ContractOpts) {
    return FacadeRead__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
  stakedRsr({ address, network }: ContractOpts) {
    return StakedRsr__factory.connect(address, this.appToolkit.getNetworkProvider(network));
  }
}

export type { FacadeRead } from './ethers';
export type { StakedRsr } from './ethers';
