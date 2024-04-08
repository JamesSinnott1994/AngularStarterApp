// No decorator here. A Service is just a normal TypeScript class
export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}