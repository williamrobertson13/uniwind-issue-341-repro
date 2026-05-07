import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy675 } from '../generated/copy/copy675';
import { layout675 } from '../generated/layouts/layout675';
import { palette675 } from '../generated/palettes/palette675';

const RuntimeView675 = withUniwind(View);

export function Screen675() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView675 styleClassName={layout675.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy675.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy675.detail} / {palette675.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
