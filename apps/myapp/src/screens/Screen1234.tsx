import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1234 } from '../generated/copy/copy1234';
import { layout1234 } from '../generated/layouts/layout1234';
import { palette1234 } from '../generated/palettes/palette1234';

const RuntimeView1234 = withUniwind(View);

export function Screen1234() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView1234 styleClassName={layout1234.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1234.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1234.detail} / {palette1234.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
