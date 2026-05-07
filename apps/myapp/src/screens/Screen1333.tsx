import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1333 } from '../generated/copy/copy1333';
import { layout1333 } from '../generated/layouts/layout1333';
import { palette1333 } from '../generated/palettes/palette1333';

const RuntimeView1333 = withUniwind(View);

export function Screen1333() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView1333 styleClassName={layout1333.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1333.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1333.detail} / {palette1333.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
