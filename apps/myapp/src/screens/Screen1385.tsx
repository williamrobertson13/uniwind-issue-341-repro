import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1385 } from '../generated/copy/copy1385';
import { layout1385 } from '../generated/layouts/layout1385';
import { palette1385 } from '../generated/palettes/palette1385';

const RuntimeView1385 = withUniwind(View);

export function Screen1385() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView1385 styleClassName={layout1385.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1385.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1385.detail} / {palette1385.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
