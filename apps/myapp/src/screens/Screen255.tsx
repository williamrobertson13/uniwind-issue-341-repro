import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy255 } from '../generated/copy/copy255';
import { layout255 } from '../generated/layouts/layout255';
import { palette255 } from '../generated/palettes/palette255';

const RuntimeView255 = withUniwind(View);

export function Screen255() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView255 styleClassName={layout255.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy255.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy255.detail} / {palette255.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
