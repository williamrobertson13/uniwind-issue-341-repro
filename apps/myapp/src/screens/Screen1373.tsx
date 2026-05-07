import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1373 } from '../generated/copy/copy1373';
import { layout1373 } from '../generated/layouts/layout1373';
import { palette1373 } from '../generated/palettes/palette1373';

const RuntimeView1373 = withUniwind(View);

export function Screen1373() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView1373 styleClassName={layout1373.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1373.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1373.detail} / {palette1373.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
