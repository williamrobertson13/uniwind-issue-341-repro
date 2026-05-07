import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy534 } from '../generated/copy/copy534';
import { layout534 } from '../generated/layouts/layout534';
import { palette534 } from '../generated/palettes/palette534';

const RuntimeView534 = withUniwind(View);

export function Screen534() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView534 styleClassName={layout534.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy534.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy534.detail} / {palette534.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
