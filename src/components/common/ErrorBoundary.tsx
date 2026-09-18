import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#092328] text-[#F7F4ED] flex items-center justify-center p-6 text-center">
          <div className="max-w-md bg-[#12544F]/40 border border-[#12544F] rounded-2xl p-8 shadow-2xl">
            <h1 className="text-2xl font-bold text-[#F7F4ED] mb-3">حدث خطأ غير متوقع | An Error Occurred</h1>
            <p className="text-sm text-[#F7F4ED]/70 mb-6">
              نعتذر، واجه النظام خطأ غير متوقع. يرجى إعادة تحميل الصفحة.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-[#2A835F] hover:bg-[#237051] text-[#F7F4ED] font-semibold rounded-lg transition-colors"
            >
              إعادة التحميل | Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
