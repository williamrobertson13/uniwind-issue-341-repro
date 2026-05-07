import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy238 } from '../generated/copy/copy238';
import { layout238 } from '../generated/layouts/layout238';
import { palette238 } from '../generated/palettes/palette238';

const RuntimeView238 = withUniwind(View);

export function Screen238() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView238 styleClassName={layout238.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy238.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy238.detail} / {palette238.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
