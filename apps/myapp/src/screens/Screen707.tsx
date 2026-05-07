import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy707 } from '../generated/copy/copy707';
import { layout707 } from '../generated/layouts/layout707';
import { palette707 } from '../generated/palettes/palette707';

const RuntimeView707 = withUniwind(View);

export function Screen707() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView707 styleClassName={layout707.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy707.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy707.detail} / {palette707.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
