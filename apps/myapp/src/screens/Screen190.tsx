import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy190 } from '../generated/copy/copy190';
import { layout190 } from '../generated/layouts/layout190';
import { palette190 } from '../generated/palettes/palette190';

const RuntimeView190 = withUniwind(View);

export function Screen190() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView190 styleClassName={layout190.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy190.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy190.detail} / {palette190.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
