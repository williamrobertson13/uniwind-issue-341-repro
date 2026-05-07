import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy998 } from '../generated/copy/copy998';
import { layout998 } from '../generated/layouts/layout998';
import { palette998 } from '../generated/palettes/palette998';

const RuntimeView998 = withUniwind(View);

export function Screen998() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView998 styleClassName={layout998.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy998.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy998.detail} / {palette998.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
