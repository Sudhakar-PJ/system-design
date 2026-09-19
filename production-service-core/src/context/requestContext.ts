/**
 * Request-Scoped Context Storage using AsyncLocalStorage
 * 
 * Location: src/context/request-context.ts
 */

import { AsyncLocalStorage } from "async_hooks";

export interface RequestContext {
    requestId: string;
    traceId: string;
    spanId?: string;
    userId?: string;
    startTime: number;
}

class RequestContextStorage {
    private static instance: RequestContextStorage;
    private readonly storage: AsyncLocalStorage<RequestContext>;

    private constructor() {
        this.storage = new AsyncLocalStorage<RequestContext>();
    }

    public static getInstance(): RequestContextStorage {
        if (!RequestContextStorage.instance) {
            RequestContextStorage.instance = new RequestContextStorage();
        }
        return RequestContextStorage.instance;
    }

    public runWithContext<T>(context: RequestContext, fn: () => T): T {
        return this.storage.run(context, fn)
    }

    public getStore(): RequestContext | undefined {
    return this.storage.getStore();
    }
   
    public getRequestId(): string | undefined {
    return this.getStore()?.requestId;
    }

    public getTraceId(): string | undefined {
    return this.getStore()?.traceId;
    }

    public setUserId(userId: string): void {
    const store = this.getStore();
    if (store) {
    store.userId = userId;
    }
  }
}

export const requestContext = RequestContextStorage.getInstance();
