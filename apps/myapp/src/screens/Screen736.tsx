import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy736 } from '../generated/copy/copy736';
import { layout736 } from '../generated/layouts/layout736';
import { palette736 } from '../generated/palettes/palette736';

const RuntimeView736 = withUniwind(View);

export function Screen736() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView736 styleClassName={layout736.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy736.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy736.detail} / {palette736.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
