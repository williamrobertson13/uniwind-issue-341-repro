import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy518 } from '../generated/copy/copy518';
import { layout518 } from '../generated/layouts/layout518';
import { palette518 } from '../generated/palettes/palette518';

const RuntimeView518 = withUniwind(View);

export function Screen518() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView518 styleClassName={layout518.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy518.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy518.detail} / {palette518.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
