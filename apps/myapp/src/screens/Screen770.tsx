import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy770 } from '../generated/copy/copy770';
import { layout770 } from '../generated/layouts/layout770';
import { palette770 } from '../generated/palettes/palette770';

const RuntimeView770 = withUniwind(View);

export function Screen770() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView770 styleClassName={layout770.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy770.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy770.detail} / {palette770.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
