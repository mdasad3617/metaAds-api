import { ApiProperty } from '@nestjs/swagger';

export class MetaAdAccountDto {
  @ApiProperty({ example: 'act_123456789' })
  id: string;

  @ApiProperty({ example: 'My Business Ad Account' })
  name: string;

  @ApiProperty({ 
    example: 1, 
    description: 'Account status: 1 = ACTIVE, 2 = DISABLED, 3 = UNSETTLED, 7 = PENDING_RISK_REVIEW, 8 = PENDING_SETTLEMENT, 9 = IN_GRACE_PERIOD, 100 = PENDING_CLOSURE, 101 = CLOSED, 201 = ANY_ACTIVE, 202 = ANY_CLOSED' 
  })
  account_status: number;

  @ApiProperty({ example: 'USD' })
  currency: string;

  @ApiProperty({ example: 'America/New_York' })
  timezone_name: string;

  @ApiProperty({ example: '1234.56', description: 'Amount spent in account currency' })
  amount_spent: string;

  @ApiProperty({ example: '5000.00', description: 'Account balance in account currency' })
  balance: string;
}

export class MetaAdAccountsResponseDto {
  @ApiProperty({ 
    type: [MetaAdAccountDto],
    description: 'List of Meta ad accounts'
  })
  data: MetaAdAccountDto[];
}