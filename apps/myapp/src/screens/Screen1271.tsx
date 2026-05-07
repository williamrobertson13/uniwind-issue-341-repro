import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1271 } from '../generated/copy/copy1271';
import { layout1271 } from '../generated/layouts/layout1271';
import { palette1271 } from '../generated/palettes/palette1271';

const RuntimeView1271 = withUniwind(View);

export function Screen1271() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView1271 styleClassName={layout1271.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1271.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1271.detail} / {palette1271.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
