import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { AnchorCalculator } from "../target/types/anchor_calculator";
import { assert } from "chai";

describe("anchor-calculator", () => {

  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace
    .anchorCalculator as Program<AnchorCalculator>;

  // Create new account keypair
  const dataAccount = anchor.web3.Keypair.generate();

  it("Initialize Account", async () => {

    await program.methods
      .init(10)
      .accounts({
        account: dataAccount.publicKey,
        signer: provider.wallet.publicKey,
      })
      .signers([dataAccount])
      .rpc();

    const account = await program.account.dataShape.fetch(
      dataAccount.publicKey
    );

    console.log("Initialized Value:", account.num);

    assert.equal(account.num, 10);
  });

  it("Add Number", async () => {

    await program.methods
      .add(5)
      .accounts({
        account: dataAccount.publicKey,
        signer: provider.wallet.publicKey,
      })
      .rpc();

    const account = await program.account.dataShape.fetch(
      dataAccount.publicKey
    );

    console.log("After Add:", account.num);

    assert.equal(account.num , 15);
  });

  it("Subtract Number", async () => {

    await program.methods
      .subtract(3)
      .accounts({
        account: dataAccount.publicKey,
        signer: provider.wallet.publicKey,
      })
      .rpc();

    const account = await program.account.dataShape.fetch(
      dataAccount.publicKey
    );

    console.log("After Subtract:", account.num);

    assert.equal(account.num , 12);
  });

  it("Half Number", async () => {

    await program.methods
      .half()
      .accounts({
        account: dataAccount.publicKey,
        signer: provider.wallet.publicKey,
      })
      .rpc();

    const account = await program.account.dataShape.fetch(
      dataAccount.publicKey
    );

    console.log("After Half:", account.num);

    assert.equal(account.num , 6);
  });

  it("Double Number", async () => {

    await program.methods
      .double()
      .accounts({
        account: dataAccount.publicKey,
        signer: provider.wallet.publicKey,
      })
      .rpc();

    const account = await program.account.dataShape.fetch(
      dataAccount.publicKey
    );

    console.log("After Double:", account.num);

    assert.equal(account.num , 12);
  });

});