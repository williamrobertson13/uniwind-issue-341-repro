import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy504 } from '../generated/copy/copy504';
import { layout504 } from '../generated/layouts/layout504';
import { palette504 } from '../generated/palettes/palette504';

const RuntimeView504 = withUniwind(View);

export function Screen504() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView504 styleClassName={layout504.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy504.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy504.detail} / {palette504.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
