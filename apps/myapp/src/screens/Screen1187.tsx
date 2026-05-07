import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1187 } from '../generated/copy/copy1187';
import { layout1187 } from '../generated/layouts/layout1187';
import { palette1187 } from '../generated/palettes/palette1187';

const RuntimeView1187 = withUniwind(View);

export function Screen1187() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView1187 styleClassName={layout1187.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1187.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1187.detail} / {palette1187.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
