import "reflect-metadata";
import 'mocha';
import {expect} from 'chai';
import {instance, mock, verify, when} from "ts-mockito";
import {Message} from "discord.js";
import {MessageResponder} from '../../app/Service/Chat/MessageResponder'
import {PingTest} from '../../app/Service/Chat/pingTest'

describe('MessageResponder', () => {
  let mockedPingFinderClass: PingTest;
  let mockedPingFinderInstance: PingTest;
  let mockedMessageClass: Message;
  let mockedMessageInstance: Message;

  let service: MessageResponder;

  beforeEach(() => {
    mockedPingFinderClass = mock(PingTest);
    mockedPingFinderInstance = instance(mockedPingFinderClass);
    mockedMessageClass = mock(Message);
    mockedMessageInstance = instance(mockedMessageClass);
    setMessageContents();

    service = new MessageResponder(mockedPingFinderInstance);
  })

  it('should reply', async () => {
    whenIsPingThenReturn(true);

    await service.handle(mockedMessageInstance);

    verify(mockedMessageClass.reply('pong!')).once();
  })

  it('should not reply', async () => {
    whenIsPingThenReturn(false);

    await service.handle(mockedMessageInstance).then(() => {
      // Successful promise is unexpected, so we fail the test
      expect.fail('Unexpected promise');
    }).catch(() => {
	 // Rejected promise is expected, so nothing happens here
    });

    verify(mockedMessageClass.reply('pong!')).never();
  })

  function setMessageContents() {
    mockedMessageInstance.content = "Non-empty string";
  }

  function whenIsPingThenReturn(result: boolean) {
    when(mockedPingFinderClass.isPing("Non-empty string")).thenReturn(result);
  }

  describe('PingTest', () => {
    let service: PingTest;
    beforeEach(() => {
      service = new PingTest();
    })
  
    it('should find "ping" in the string', () => {
      expect(service.isPing("ping")).to.be.true
    })
  });
});