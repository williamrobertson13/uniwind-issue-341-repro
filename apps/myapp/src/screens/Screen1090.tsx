import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1090 } from '../generated/copy/copy1090';
import { layout1090 } from '../generated/layouts/layout1090';
import { palette1090 } from '../generated/palettes/palette1090';

const RuntimeView1090 = withUniwind(View);

export function Screen1090() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView1090 styleClassName={layout1090.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1090.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1090.detail} / {palette1090.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
