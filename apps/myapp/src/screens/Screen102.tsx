import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy102 } from '../generated/copy/copy102';
import { layout102 } from '../generated/layouts/layout102';
import { palette102 } from '../generated/palettes/palette102';

const RuntimeView102 = withUniwind(View);

export function Screen102() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView102 styleClassName={layout102.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy102.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy102.detail} / {palette102.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
