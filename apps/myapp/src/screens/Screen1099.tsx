import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1099 } from '../generated/copy/copy1099';
import { layout1099 } from '../generated/layouts/layout1099';
import { palette1099 } from '../generated/palettes/palette1099';

const RuntimeView1099 = withUniwind(View);

export function Screen1099() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView1099 styleClassName={layout1099.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1099.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1099.detail} / {palette1099.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
