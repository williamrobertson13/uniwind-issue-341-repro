import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1115 } from '../generated/copy/copy1115';
import { layout1115 } from '../generated/layouts/layout1115';
import { palette1115 } from '../generated/palettes/palette1115';

const RuntimeView1115 = withUniwind(View);

export function Screen1115() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView1115 styleClassName={layout1115.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1115.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1115.detail} / {palette1115.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
