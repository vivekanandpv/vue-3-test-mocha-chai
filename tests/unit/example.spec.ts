import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import { FOO_SYMBOL } from '@/services/foo.service';

describe.only('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    const headerText = wrapper.find('[data-testid = "header"]').text();
    expect(headerText).to.equal(msg);
  });

  it('renders initial counter in the counter-span', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    const counterSpanText = wrapper
      .find('[data-testid = "counter-span"]')
      .text();
    expect(counterSpanText).to.equal('0');
  });

  it('renders incremented counter in the counter-span when the increment button is clicked', async () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });

    //  get the button and counter-span
    //  emit the click on the button
    //  assert that the span has the incremented number

    wrapper.find('[data-testid = "increment-button"]').trigger('click');

    //  wait for the click to propagate
    await wrapper.vm.$nextTick();

    const counterSpanText = wrapper
      .find('[data-testid = "counter-span"]')
      .text();

    expect(counterSpanText).to.equal('1');
  });

  it('renders message from the injection', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
      global: {
        //  proving a mock implementation for test
        provide: {
          [FOO_SYMBOL]: () => {
            return 'Foo MOCK';
          },
        },
      },
    });

    //  By default, there is no injection!
    const injectText = wrapper.find('[data-testid = "inject-output"]').text();
    expect(injectText).to.equal('Foo MOCK');
  });
});
