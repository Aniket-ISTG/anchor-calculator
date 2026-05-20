use anchor_lang::prelude::*;

declare_id!("8gPdvjYMHYhSh1NtCRtK2YGtjHfbJi4psRy5UhWsh34A");

#[program]
pub mod anchor_calculator {
    use super::*;
    pub fn init(ctx : Context<Initialize>, initial_value : u32) -> Result<()>{
        ctx.accounts.account.num = initial_value;
        Ok(())
    }
    pub fn add(ctx : Context<Add>,num : u32) -> Result<()>{
        ctx.accounts.account.num += num;
        Ok(())
    }
    pub fn subtract(ctx : Context<Subtract> , num : u32) -> Result<()>{
        ctx.accounts.account.num -= num;
        Ok(())
    }
    pub fn half(ctx : Context<Half>) -> Result<()>{
        ctx.accounts.account.num /= 2;
        Ok(())
    }
    pub fn double(ctx : Context<Double>) -> Result<()>{
        ctx.accounts.account.num *= 2;
        Ok(())
    }
}

#[account]
pub struct DataShape{
    num : u32,
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = signer, space = 8+8)]
    pub account : Account<'info, DataShape>,
    pub system_program : Program<'info, System>,
    #[account(mut)]
    pub signer : Signer<'info>
}

#[derive(Accounts)]
pub struct Add<'info> {
    #[account(mut)]
    pub account : Account<'info, DataShape>,
    #[account(mut)]
    pub signer : Signer<'info>
}
#[derive(Accounts)]
pub struct Subtract<'info> {
    #[account(mut)]
    pub account : Account<'info, DataShape>,
    #[account(mut)]
    pub signer : Signer<'info>
}
#[derive(Accounts)]
pub struct Half<'info> {
    #[account(mut)]
    pub account : Account<'info, DataShape>,
    #[account(mut)]
    pub signer : Signer<'info>
}
#[derive(Accounts)]
pub struct Double<'info> {
    #[account(mut)]
    pub account : Account<'info, DataShape>,
    #[account(mut)]
    pub signer : Signer<'info>
}