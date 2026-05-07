import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1067 } from '../generated/copy/copy1067';
import { layout1067 } from '../generated/layouts/layout1067';
import { palette1067 } from '../generated/palettes/palette1067';

const RuntimeView1067 = withUniwind(View);

export function Screen1067() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView1067 styleClassName={layout1067.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1067.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1067.detail} / {palette1067.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
