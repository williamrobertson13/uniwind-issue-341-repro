import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1337 } from '../generated/copy/copy1337';
import { layout1337 } from '../generated/layouts/layout1337';
import { palette1337 } from '../generated/palettes/palette1337';

const RuntimeView1337 = withUniwind(View);

export function Screen1337() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView1337 styleClassName={layout1337.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1337.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1337.detail} / {palette1337.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
