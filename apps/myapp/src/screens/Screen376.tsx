import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy376 } from '../generated/copy/copy376';
import { layout376 } from '../generated/layouts/layout376';
import { palette376 } from '../generated/palettes/palette376';

const RuntimeView376 = withUniwind(View);

export function Screen376() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView376 styleClassName={layout376.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy376.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy376.detail} / {palette376.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
