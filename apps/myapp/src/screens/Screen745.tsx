import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy745 } from '../generated/copy/copy745';
import { layout745 } from '../generated/layouts/layout745';
import { palette745 } from '../generated/palettes/palette745';

const RuntimeView745 = withUniwind(View);

export function Screen745() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView745 styleClassName={layout745.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy745.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy745.detail} / {palette745.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
