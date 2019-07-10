


class CrisisSpewer {
  constructor() {
    this.eventListenerStore = {};

  }
  emit(eventName, data) {
    const eventListeners = this.eventListenerStore[eventName] || [];
    eventListeners.forEach(listener => {
      listener(data);

    });

  }
  on(eventName, listener) {
    const eventListeners = this.eventListenerStore[eventName] || [];
    eventListeners.push(listener);
    this.eventListenerStore[eventName] = eventListeners;

  }
}

const cs = new CrisisSpewer();

cs.on('my event', data => {
  console.log(data);
});

cs.emit('my event', 'hi');
