import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1223 } from '../generated/copy/copy1223';
import { layout1223 } from '../generated/layouts/layout1223';
import { palette1223 } from '../generated/palettes/palette1223';

const RuntimeView1223 = withUniwind(View);

export function Screen1223() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView1223 styleClassName={layout1223.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1223.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1223.detail} / {palette1223.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
