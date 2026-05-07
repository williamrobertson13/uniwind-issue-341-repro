import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy11 } from '../generated/copy/copy11';
import { layout11 } from '../generated/layouts/layout11';
import { palette11 } from '../generated/palettes/palette11';

const RuntimeView11 = withUniwind(View);

export function Screen11() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView11 styleClassName={layout11.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy11.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy11.detail} / {palette11.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
