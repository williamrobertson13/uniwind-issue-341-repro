import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy305 } from '../generated/copy/copy305';
import { layout305 } from '../generated/layouts/layout305';
import { palette305 } from '../generated/palettes/palette305';

const RuntimeView305 = withUniwind(View);

export function Screen305() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView305 styleClassName={layout305.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy305.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy305.detail} / {palette305.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
