import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1027 } from '../generated/copy/copy1027';
import { layout1027 } from '../generated/layouts/layout1027';
import { palette1027 } from '../generated/palettes/palette1027';

const RuntimeView1027 = withUniwind(View);

export function Screen1027() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView1027 styleClassName={layout1027.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1027.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1027.detail} / {palette1027.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
