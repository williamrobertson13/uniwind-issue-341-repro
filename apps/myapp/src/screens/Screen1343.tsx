import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1343 } from '../generated/copy/copy1343';
import { layout1343 } from '../generated/layouts/layout1343';
import { palette1343 } from '../generated/palettes/palette1343';

const RuntimeView1343 = withUniwind(View);

export function Screen1343() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView1343 styleClassName={layout1343.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1343.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1343.detail} / {palette1343.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
