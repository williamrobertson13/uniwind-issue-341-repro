import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy871 } from '../generated/copy/copy871';
import { layout871 } from '../generated/layouts/layout871';
import { palette871 } from '../generated/palettes/palette871';

const RuntimeView871 = withUniwind(View);

export function Screen871() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView871 styleClassName={layout871.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy871.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy871.detail} / {palette871.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
