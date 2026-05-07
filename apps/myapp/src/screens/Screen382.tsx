import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy382 } from '../generated/copy/copy382';
import { layout382 } from '../generated/layouts/layout382';
import { palette382 } from '../generated/palettes/palette382';

const RuntimeView382 = withUniwind(View);

export function Screen382() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView382 styleClassName={layout382.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy382.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy382.detail} / {palette382.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
